const loader = () => {
  return new promice((reject, resolve) => {
    const success = true;
    if (success) {
      resolve(0.3);
    } else {
      reject(0.7);
    }
  });
};
