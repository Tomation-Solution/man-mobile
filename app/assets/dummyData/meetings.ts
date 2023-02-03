import { images } from ".";

interface MeetingCardProps {
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  description: string;
  image: string;
  organizer: {
    name: string;
    image: string;
    major: string;
    position: string;
    details: string;
  };
}

export const meetings = [
  {
    id: 1,
    title: "Meeting 1",
    date: "January 1nd 2021",
    startTime: "12:00",
    endTime: "13:00",
    location: "Location 1",
    description: "Description 1",
    image: images.meeting_1,
    organizer: {
      name: "Organizer 1",
      image: images.man,
      major: "Major 1",
      position: "Position 1",
      details: "Details 1",
    },
  },
  {
    id: 2,
    title: "Meeting 2",
    date: "January 2nd 2022",
    startTime: "12:00",
    endTime: "13:00",
    location: "Location 2",
    description: "Description 2",
    image: images.meeting_1,
    organizer: {
      name: "Organizer 2",
      image: images.man,
      major: "Major 2",
      position: "Position 2",
      details: "Details 2",
    },
  },
  {
    id: 3,
    title: "Meeting 3",
    date: "January 3nd 2022",
    startTime: "12:00",
    endTime: "13:00",
    location: "Location 3",
    description: "Description 3",
    image: images.meeting_1,
    organizer: {
      name: "Organizer 3",
      image: images.man,
      major: "Major 3",
      position: "Position 3",
      details: "Details 3",
    },
  },
  {
    id: 4,
    title: "Meeting 4",
    date: "January 3nd 2022",
    startTime: "12:00",
    endTime: "13:00",
    location: "Location 4",
    description: "Description 4",
    image: images.meeting_1,
    organizer: {
      name: "Organizer 4",
      image: images.man,
      major: "Major 4",
      position: "Position 4",
      details: "Details 4",
    },
  },
  {
    id: 5,
    title: "Meeting 5",
    date: "January 3nd 2022",
    startTime: "12:00",
    endTime: "13:00",
    location: "Location 5",
    description: "Description 5",
    image: images.meeting_1,
    organizer: {
      name: "Organizer 5",
      image: images.man,
      major: "Major 5",
      position: "Position 5",
      details: "Details 5",
    },
  },
  {
    id: 6,
    title: "Meeting 6",
    date: "January 3nd 2022",
    startTime: "12:00",
    endTime: "13:00",
    location: "Location 6",
    description: "Description 6",
    image: images.meeting_1,
    organizer: {
      name: "Organizer 6",
      image: images.man,
      major: "Major 6",
      position: "Position 6",
      details: "Details 6",
    },
  },
];
