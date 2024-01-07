const {createApp} = Vue  

createApp ({
    data(){
        return{
            message : 'Una breve presentazione di me stesso',
            name : 'Diego',
            surname : 'Farrugio',
            height : '1,88',
            taxCode: 'FRRDGI96L055B602Z',
            bestTeam: '',
            teamInter: 'inter-color',
            teamMilan: 'milan-color',
            teamJuve: 'juve-color',
            borderedStyleTeam: 'borderedTeam',
            image: 'img-foto.png'
        }
    }

}).mount('#presentazione')