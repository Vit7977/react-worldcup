import { connection } from "../database/connection.js";

const PlayerController = {
  async getPlayer(_, res) {
    await connection.execute(`SELECT * FROM jogador`, (error, result) => {
      if (error) {
        return res.json(error);
      }
      return res.json(result);
    });
  },
  async addPlayer(req, res) {
    const data = [req.body.nome, req.body.data_nasc, req.body.foto_url];

    try {
      await connection.execute(
        `INSERT INTO jogador (nome, data_nasc, foto_url) VALUES(?,?,?)`,
        data
      );
      return res.status(201).json({
        message: "Jogador cadastrado com sucesso!",
        data: data,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  },

  async updatePlayer(req, res) {
    const data = [
      req.body.nome,
      req.body.data_nasc,
      req.body.foto_url,
      req.params.id,
    ];

    try {
      await connection.execute(
        `UPDATE jogador SET nome = ?, data_nasc = ?, foto_url = ? WHERE id = ?`,
        data
      );
      return res.status(200).json({
        message: "Jogador atualizado com sucesso!",
        data: data,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  },

  async deletePlayer(req, res) {
    const id = [req.params.id];
    try {
      await connection.execute(`DELETE FROM jogador WHERE id = ?`, id);
      return res
        .status(200)
        .json("Jogador de id: " + id + " foi deletado com sucesso!");
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  },
};

export default PlayerController;
