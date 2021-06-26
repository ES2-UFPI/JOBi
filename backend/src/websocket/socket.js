import { io } from '../http';
import Conexao from "../models/Conexao";
import Mensagem from "../models/Mensagem";

//Observações:
//Criar table de prestadores interessados com foreign key prestadores

io.on('connect', (socket) => {
    console.log('Nova conexao', socket.id);
    

    //Quando o contratante abrir iniciar o chat com o usuário
    socket.on('iniciar_chat', async(params, callback) => {
        //O params vai receber o id do contratante, e o id do prestador
        console.log(params.id_p, params.id_c);
        try{
            if(params.id_p != null && params.id_c != null){
               const conexao = await Conexao.findOne({ where: { prestador_id: params.id_p, contratante_id: params.id_c }});
               console.log(conexao)
                if(conexao){
                    socket.join(conexao.id);
                }else{
                   const new_conexao = await Conexao.create({
                       prestador_id: params.id_p,
                       contratante_id: params.id_c
                   });
                   console.log(new_conexao.id);
                   socket.join(new_conexao.id);
                }
            }else{
                callback({error: 'Algum parametro passado errado'})
            }
        }catch(e){
            callback({error: e})
        }
        
        //Criar mensagem de entrada ao contratante
        //socket.emit('novo_chat', { user: admin, message: 'Boa sorte na sua conversa!' });
        //Criar mensagem de entrada ao prestador
        //socket.broadcast.to(new_conexao.id).emit('novo_chat', { user: admin, message: 'Boa sorte na sua contratação!' });
        //Adiciona os usuarios do chat em uma sala com o id da conexao
        
         //callback devolve erro se o se tiver
        
    })

    socket.on('enviar_mensagem', async (params, callback) => {
         //O params vai receber o id do prestador, id do contrantante, o texto da mensagem
         //, e um campo true ou false para saber se quem enviou a mensagem foi o prestador ou o contratante
        console.log(params.id_p, params.id_c);
        try{
            if(params.id_p =! null && params.id_c != null){
               const conexao = await Conexao.findOne({ where: { prestador_id: params.id_p, contratante_id: params.id_c }});
                if(conexao){
                    socket.join(conexao.id);
                    if(params.isPrest == false){
                        socket.to(conexao.id).emit('message', {user: params.id_c, texto: params.texto});
                        await Mensagem.create({
                            conexao_id: conexao.id,
                            texto: params.texto,
                            emissor: params.id_c,
                            is_prest: 2,
                        })
                    }else{
                        socket.to(conexao.id).emit('message', {user: params.id_p, texto: params.texto});
                        await Mensagem.create({
                            conexao_id: conexao.id,
                            texto: params.texto,
                            emissor: params.id_p,
                            is_prest: 1,
                        })
                    }
                    
                }else{
                    callback({error: 'Nao ha nenhuma conexao com esses usuarios'});
                }
            }else{
                callback({error: 'Valores de id invalidos'});
            }
        }catch(e){
            callback({error: e})
        }
    })

    socket.on('apagar_chat', async(params, callback) => {
        //O params vai receber o id do contratante, e o id do prestador
        console.log(params.id_p, params.id_c);
        //Verificar o valor dos parametros
        //Se tudo ok, deletar a conexão entre os dois na table
        //callback devolve erro ou mensagem de sucesso
        
    })


    socket.on('disconnect', () => {
        console.log('Se disconectou');
    })
});