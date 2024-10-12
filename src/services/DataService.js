// This is a mock service. In a real application, this would make API calls.
export const fetchLearningMapData = async () => {
  // Simulating an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        nodes: [
          { id: 1, title: 'Start', x: 100, y: 100 },
          { id: 2, title: 'Basics', x: 250, y: 200 },
          { id: 3, title: 'Advanced', x: 400, y: 100 },
        ],
        paths: [
          { path: 'M100,100 Q175,150 250,200' },
          { path: 'M250,200 Q325,150 400,100' },
        ],
      });
    }, 1000);
  });
};
