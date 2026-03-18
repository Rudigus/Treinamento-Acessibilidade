export const SECOES_MOCK = [
    {
        id: 'dados-pessoais',
        titulo: 'Dados pessoais',
        descricao:
            'Área com informações básicas do cidadão, incluindo nome social, documento e dados de contato.',
    },
    {
        id: 'endereco',
        titulo: 'Endereço',
        itens: [
            {
                id: 'residencial',
                titulo: 'Residencial',
                descricao:
                    'Área com os endereços cadastrados para correspondência e confirmação de localidade.',
            },
            {
                id: 'comercial',
                titulo: 'Comercial',
                descricao: 'Área com endereço de trabalho e referências para contato institucional.',
            },
        ],
    },
    {
        id: 'contatos',
        titulo: 'Contatos',
        descricao:
            'Área com telefones e e-mails usados para notificações do serviço, autenticação e comunicação.',
    },
    {
        id: 'documentos',
        titulo: 'Documentos',
        itens: [
            {
                id: 'obrigatorios',
                titulo: 'Obrigatórios',
                descricao:
                    'Área para consulta e atualização dos documentos obrigatórios e anexos enviados.',
            },
            {
                id: 'complementares',
                titulo: 'Complementares',
                descricao:
                    'Área para anexos adicionais solicitados em fluxos específicos de atualização cadastral.',
            },
        ],
    },
]
