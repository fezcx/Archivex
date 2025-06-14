exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ creators: ["Creator1", "Creator2"] }),
  };
};