import {connection} from "../database/connection.js";

const GrupoController = {
  async getGrupos(_, res) {
    await connection.execute(`SELECT * FROM grupo`, (error, result) => {
      if (error) {
        return res.json(error.message);
      }
      return res.status(200).json(result);
    });
  },
};

export default GrupoController;
