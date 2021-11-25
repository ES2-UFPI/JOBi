import {Sequelize, Model} from "sequelize"; 

export default class Relatorio_prestadores extends Model {
    static init(sequelize) {
        super.init({
            Prestador: {
                type: Sequelize.STRING,
                defaultValue: 1,
            },
            Email: {
                type: Sequelize.STRING,
                defaultValue: false,
            },
            Categoria: {
                type: Sequelize.INTEGER,
                defaultValue: false,
            },
            Estrelas: {
                type: Sequelize.INTEGER,
                defaultValue: '',
            },
           
        },{ 
            sequelize,
            tableName: 'relatorio_prestadores',
        });
        Relatorio_prestadores.removeAttribute('id')
        Relatorio_prestadores.removeAttribute('created_at')
        Relatorio_prestadores.removeAttribute('updated_at')
        Relatorio_prestadores.removeAttribute('updatedAt')
        return this;
    }
    
}