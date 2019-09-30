module.exports = {
  // Função responsável por adicionar 2 números:
  adicionar: (req, res) => {
    try {
      const { n1, n2 } = req.body;
      if (n1 == "" || n2 == "") throw new Error("Campo Vazio!");
      const result = n1 + n2;
      //console.log(result);
      return res.status(200).json({ result: result });
    } catch (error) {
      //console.log(error);
      return res.status(400).json({ message: error.message });
    }
  }
};
