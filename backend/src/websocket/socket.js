import { io } from '../../http';
import Conexao from "../models/Conexao";

//Observações:
//Problema em distinguir qual usuario mandou a mensagem
//Será necessário um campo a mais no banco pra saber se quem mandou
//a mensagem foi o prestador ou o contratante
//Criar foreign key entre o id da conexao e a mensagem
//É importante diferenciar quem enviou cada mensagem para se fazer
//o tratamento de exibição de mensagens no frontend
//Criar table de prestadores interessados com foreign key prestadores

io.on('connection', (socket) => {
    console.log('Nova conexao', socket.id);
    

    //Quando o contratante abrir iniciar o chat com o usuário
    socket.on('iniciar_chat', async(params, callback) => {
        //O params vai receber o id do contratante, e o id do prestador
        console.log(params.id_p, params.id_c);
        //Verificar o valor dos parametros
        //Se tudo ok, inserir uma conexão entre os dois na table
        socket.join(1)
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
        //Verificar o valor dos parametros
        //Se tudo ok, buscar pelo id da conexão entre os dois
        //Achada a conexao

        if(params.isPrest=false){
            socket.to(1).emit('message', {user: params.id_c, text: params.texto});
        }else{
            socket.to(1).emit('message', {user: params.id_p, text: params.texto});
        }
        
        //Inserir mensagem no banco
        //OU
        //Se quem enviou foi o prestador(params.isPrest=true) fazer:
        //
        //Inserir mensagem no banco
         //callback devolve erro o se o se tiver
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