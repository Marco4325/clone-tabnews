function status(request, response) {
  response.status(200).json({ string: "isto é uma string" });
}

export default status;
