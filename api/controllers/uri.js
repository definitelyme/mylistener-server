const revai = require('revai-node-sdk');
const fs = require('fs');
const token = require('../config/config.json').access_token;
const Transcript = require("../models/transcript");
const PlatformException = require('../models/exceptions/platform_exception');
const TranscriptException = require('../models/exceptions/transcript_exception');

module.exports = async(incoming) => {
  let uri;

  try {
    uri = new URL(incoming);
  } catch (e) {
    throw new PlatformException(e.name, e.message);
  }

  // Initialize your client with your revai access token
  var client = new revai.RevAiApiClient(token);

  // Get account details
  //   var account = await client.getAccount();

  //   console.log(`Account: ${account.email}`);
  //   console.log(`Credits remaining: ${account.balance_seconds} seconds`);

  const jobOptions = {
    metadata: "auth-user-id",
    callback_url: "http://localhost:3000/api/transcribe/result/callback",
    skip_diarization: false,
    custom_vocabularies: []
  };

  // Media may be submitted from a url
  var job = await client.submitJobUrl(uri, jobOptions);

  /** https://www.rev.ai/FTC_Sample_1.mp3
   * Waits 5 seconds between each status check to see if job is complete.
   * note: polling for job status is not recommended in a non-testing environment.
   * Use the callback_url option (see: https://www.rev.ai/docs#section/Node-SDK)
   * to receive the response asynchronously on job completion
   */
  while ((jobStatus = (await client.getJobDetails(job.id)).status) == revai.JobStatus.InProgress) {
    console.log(`Job ${job.id} is ${jobStatus}`);
    await new Promise(resolve => setTimeout(resolve, 5000));
  }

  /**
   * Get transcript as plain text
   * Transcripts can also be gotten as Object, Text Stream, Object Stream,
   * or as captions
   */
  var transcription = null;

  try {
    transcription = await client.getTranscriptText(job.id);
  } catch (e) {
    throw new TranscriptException(e.title, e.type, e.detail, e.statusCode);
  }

  await client.deleteJob(job.id);

  return new Transcript(job.id, job.name, job.type, job.status, job.metadata, job.media_url, job.failure, job.failure, job.duration_seconds, transcription, job.created_on, job.completed_on, job.callback_url);
}