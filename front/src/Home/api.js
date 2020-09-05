export const highlitedCompanies = [
    {
        id: 1,
        name: 'Alura',
        rating: 5,
        logo: require('../assets/img/alura.png'),
        category: 'Tecnologia',
        document: '05.555.382/0001-33',
        location: 'Rua Vergueiro, 3185 - Liberdade, São Paulo - SP, 04101-300',
        description: `Nossa missão é criar uma plataforma de aprendizado de tecnologia, na qual você possa discutir,
        participar e enriquecer seu conhecimento, investindo seu tempo da melhor maneira possível, quando e onde quiser.
        O desafio é fazer você se sentir parte desse grupo de profissionais de tecnologia que querem ser melhores do que
        eram ontem, para isso fomos muito além das clássicas vídeo aulas. Não é à toa que temos mais de 1 milhão de mensagens
        em nosso fórum de dúvidas e discussões. Criamos um ambiente colaborativo de aprendizado, e não apenas mais um catálogo de aulas.`,
    },
    {
        id: 2,
        name: 'Carrefour',
        rating: 5,
        logo: require('../assets/img/carrefour.png'),
    },
    {
        id: 3,
        name: 'EY',
        rating: 5,
        logo: require('../assets/img/ey-logo.png'),
    },
    {
        id: 4,
        name: 'Builders',
        rating: 5,
        logo: require('../assets/img/builders.png'),
    },
    {
        id: 5,
        name: 'Avanade',
        rating: 5,
        logo: require('../assets/img/avanade.png'),
    },
    {
        id: 6,
        name: 'Magalu',
        rating: 5,
        logo: require('../assets/img/magalu.png'),
    },
    {
        id: 7,
        name: 'Zup',
        rating: 5,
        logo: require('../assets/img/zup.png'),
    },
];

export const getHighlightedCompanies = () => highlitedCompanies;