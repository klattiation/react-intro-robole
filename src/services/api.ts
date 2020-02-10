const getEntriesFromAPi = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          id: "entry1",
          title: "Pizza essen",
          isDone: false
        },
        {
          id: "entry2",
          title: "React Tutorial",
          isDone: false
        },
        {
          id: "entry3",
          title: "Nach Hause gehen",
          isDone: false
        }
      ]);
    }, 1000);
  });
};

export default getEntriesFromAPi;
