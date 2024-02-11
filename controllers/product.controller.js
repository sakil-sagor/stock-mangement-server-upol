exports.createProduct = async (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      message: "Successfully signed up",
      data: { other, token },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Couldn't create teacher",
      error: error.message,
    });
  }
};
