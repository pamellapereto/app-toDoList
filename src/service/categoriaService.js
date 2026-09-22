import CategoriaModel from "../model/categoriaModel.js";
class CategoriaService{
    static async cadastrar(dados) {
        const {
            etiqueta
        } = dados;
        if (!etiqueta) {
            throw new Error("Etiqueta é obrigatória!");
        }
        const categoriaId = await CategoriaModel.cadastrar(
            etiqueta
        );
        const categoria = {
            categoriaId: categoriaId,
            etiqueta
        }
        return categoria;
    }
    static async atualizar(id, dados) {
        const {
            etiqueta
        } = dados;
        if(!etiqueta) {
            throw new Error("Etiqueta é obrigatória");
        }



        
        const linhaAfetada = await CategoriaModel.atualizar(
            id,
            etiqueta
        );
        if(linhaAfetada === 0) {
            throw new Error("Categoria não encontrada!");
        }
        return {
            id,
            etiqueta
        }
    }
    static async remover(id) {
        const linhaExcluida = await CategoriaModel.remover(
            id
        );
        if(linhaExcluida === 0) {
            throw new Error("Categoria não encontrada para excluir");
        }
        return {
            id
        }
    }
}
export default CategoriaService;