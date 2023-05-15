const AWS = require("aws-sdk");
const { v4: uuid } = require("uuid");

const chime = new AWS.Chime({ region: "us-east-1" });
chime.endpoint = new AWS.Endpoint("https://service.chime.aws.amazon.com");

const response = (statusCode, body) => ({
  statusCode: statusCode,
  body: JSON.stringify(body),
});

const createMeeting = async (context) => {
  const region = context.arguments.region || "us-east-1";

  const request = {
    ClientRequestToken: uuid(),
    MediaRegion: region,
  };

  try {
    const meetingRes = await chime.createMeeting(request).promise();
    return response(200, { meetingInfo: meetingRes });
  } catch (err) {
    return response(err.statusCode, { error: err });
  }
};

const addAttendee = async (context) => {
  const meetingId = context.arguments.meetingId;
  const userId = context.arguments.userId;

  try {
    const attendeeRes = await chime
      .createAttendee({
        MeetingId: meetingId,
        ExternalUserId: userId,
      })
      .promise();
    return response(200, { attendeeInfo: attendeeRes });
  } catch (err) {
    return response(400, { error: err });
  }
};

const endMeeting = async (context) => {
  const meetingId = context.arguments.meetingId;
  try {
    await chime.deleteMeeting({ MeetingId: meetingId }).promise();
    return response(200, { info: "Successfully deleted meeting" });
  } catch (err) {
    return response(err.statusCode, { error: err });
  }
};

const getMeeting = async (context) => {
  const meetingId = context.arguments.meetingId;
  try {
    const res = await chime.getMeeting({ MeetingId: meetingId }).promise();
    return response(200, { meetingInfo: res });
  } catch (err) {
    return response(400, { error: err });
  }
};

<<<<<<< HEAD
const resolvers = {
  createMeeting: (context) => createMeeting(context),
  addAttendee: (context) => addAttendee(context),
=======
const listAttendees = async (context) => {
  const meetingId = context.arguments.meetingId;
  try {
    const res = await chime.listAttendees({ MeetingId: meetingId }).promise();
    return response(200, { attendees: res });
  } catch (err) {
    return response(400, { error: err });
  }
};

const resolvers = {
  createMeeting: (context) => createMeeting(context),
  addAttendee: (context) => addAttendee(context),
  listAttendees: (context) => listAttendees(context),
>>>>>>> main
  endMeeting: (context) => endMeeting(context),
  getMeeting: (context) => getMeeting(context),
};

exports.handler = async (event) => {
  const resolver = resolvers[event.fieldName];
  if (resolver) {
    return await resolver(event);
  } else {
    return response(404, { error: "Not Found" });
  }
};
