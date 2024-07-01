export const getAllMeetups = () => {
    return fetch(`http://localhost:8088/meetups`).then((res) =>
      res.json()
    );
  };