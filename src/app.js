export const dva = {
    config: {
      onError(e) {
        e.preventDefault();
        console.log()
        console.error(e.message);
      },
    },
  };