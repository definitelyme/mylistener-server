module.exports = class Transcript {
  constructor(jobId = null, name = null, type = null, status = null, metadata = null, media_url = null,
    failure = null, failure_detail = null, duration = null, transcriptText = null, created_at = null,
    completed_on = null, callback_url = null) {
    this.jobId = jobId;
    this.name = name;
    this.type = type;
    this.status = status;
    this.metadata = metadata;
    this.media_url = media_url;
    this.failure = failure;
    this.failure_detail = failure_detail;
    this.duration = duration;
    this.transcriptText = transcriptText;
    this.callback_url = callback_url;
    this.created_at = created_at;
    this.completed_on = completed_on;
  }

  get isInProgress() {
    return true;
  }

  toJson() {
    return JSON.parse(`{
        "jobId": ${JSON.stringify(this.jobId)},
        "name": ${JSON.stringify(this.name)},
        "type": ${JSON.stringify(this.type)},
        "status": ${JSON.stringify(this.status)},
        "metadata": ${JSON.stringify(this.metadata)},
        "media_url": ${JSON.stringify(this.media_url)},
        "failure": ${JSON.stringify(this.failure)},
        "failure_detail": ${JSON.stringify(this.failure_detail)},
        "duration": ${JSON.stringify(this.duration)},
        "transcriptText": ${JSON.stringify(this.transcriptText)},
        "callback_url": ${JSON.stringify(this.callback_url)},
        "created_at": ${JSON.stringify(this.created_at)},
        "completed_on": ${JSON.stringify(this.completed_on)}
    }`);
  }

  toString() {
    return `Transcript(jobId: ${this.jobId}, name: ${this.name}, type: ${this.type}, status: ${this.status}, metadata: ${this.metadata}, media_url: ${this.media_url}, failure: ${this.failure}, failure_detail: ${this.failure_detail}, duration: ${this.duration}, transcriptText: ${this.transcriptText}, callback_url: ${this.callback_url}, created_at: ${this.created_at}, completed_on: ${this.completed_on})`;
  }
}