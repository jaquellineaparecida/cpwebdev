Este é um projeto em grupo, feito na FIAP em parceria com a Porto Seguro, o projeto em si consiste na vistoria automatizada para o setor de bicicletas, como solução criamos um ChatBot com o intuito de deixar o processo da vistoria mais confortável e de fácil compreensão para o usuário.
Neste repositório é possível conhecer mais do projeto e de como ele foi feito. Abaixo tem um tutorial de como rodar o projeto.

## OBSERVAÇÕES
* Quando o bot pedir o valor da bicicleta ou do acessórios, certifique-se que no final do valor esteja acompanhado da palavra "reais". Por exemplo "200000 reais".
* Por enquanto ainda não é possível fazer o envio de foto ou documentos, use como texto "foto.jpg" ou para documentos "nf.pdf".
* Após o envio das "fotos", o bot pode enviar uma mensagem de sucesso ou uma mensagam negativa falando que sua vistoria foi interrompida, estas mensagens são aleatórias e indicam a finalização da vistoria.
* Após a finalização da vistoria não é possível inicializar outro chat, é preciso "matar" a aplicação e subir novamente.
* O deploy na vercel deste projeto não está disponível pois a aplicação consome uma API externa.

## Este é um projeto Next.js inicializado com create-next-app.

## Iniciando
Primiero, clone o projeto para a sua máquina com o link: https://github.com/jaquellineaparecida/portobot
Após o clone, baixe as dependencias do projeto:
``` bash
npm i
```

Em seguida execute o servidor de desenvolvimento com:
``` bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Abra http://localhost:3000 no seu navegador para ver o resultado.


