import AssistantV2 from 'ibm-watson/assistant/v2';
import { IamAuthenticator } from 'ibm-watson/auth';

const apiKey = "sAJ_Foe3jKjDMbn2Wu4Tst8EZeUhYuRpzisWur-9wNaG";
const serviceUrl = "https://api.us-south.assistant.watson.cloud.ibm.com/instances/15619dc7-6766-4002-98bc-918b8fc0a0f4";
const assistantId = "e5032239-6422-4497-a247-fadb3977e139";

const assistant = new AssistantV2({
    version: "2021-06-14",
    authenticator: new IamAuthenticator({
        apikey: apiKey,
    }),
    serviceUrl: serviceUrl,
});

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { message, sessionId } = req.body;

            // Verifica se há um sessionId; se não houver, cria uma nova sessão
            if (!sessionId) {
                const newSessionId = await createSession();
                const response = await sendMessageToAssistant(message, newSessionId);
                res.status(200).json(response);
            } else {
                const response = await sendMessageToAssistant(message, sessionId);
                res.status(200).json(response);
            }
        } catch (error) {
            res.status(500).json({ error: 'Erro ao enviar mensagem para o assistente' });
        }
    } else {
        res.status(405).json({ error: 'Método não permitido' });
    }
}


async function createSession() {
    try {
        const res = await assistant.createSession({ assistantId });
        return res.result.session_id;
    } catch (err) {
        console.log('session_id: ', res.result.session_id);
        throw err;
    }
}

async function sendMessageToAssistant(message, sessionId) {
    try {
        const res = await assistant.message({
            assistantId,
            sessionId,
            input: { "message_type": "text", "text": message },
        });
        const responseText = res.result.output.generic[0].text;
        return { response: responseText };
    } catch (err) {
        throw err;
    }
}
