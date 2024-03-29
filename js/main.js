"use strict";

const { createApp } = Vue;

createApp({
    data() {
        return {
            currentContactIndex: 0,
            newMessage: '',
            searchChat: '',
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Tu?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Anche io, tutto bene.',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:37:00',
                            message: 'Ho visto alcuni dei tuoi progetti, sai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:39:55',
                            message: 'Davvero?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:45:00',
                            message: 'Sì, ad esempio quello che replica una nota app per chattare.',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:46:00',
                            message: 'Quali tecnologie hai utilizzato?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 17:05:55',
                            message: 'Ho utilizzato HTML, CSS e JavaScript!',
                            status: 'received'
                        },
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]
        }
    },
    methods: {
        // Funzione per cambiare chat al click
        onClickChat(i) {
            this.currentContactIndex = i;
        },
        // Funzione per inviare messaggio e ottenere una risposta (dopo 1s) dal contatto attivo
        sendMessage() {
            const newObjMessageUser = {
                date: new Date,
                message: this.newMessage,
                status: 'sent'
            };
            // Condizione di invio messaggio: se il campo input è vuoto non viene inviato alcun messaggio
            if( this.newMessage !== '') {
                this.contacts[this.currentContactIndex].messages.push(newObjMessageUser);
                // Risposta del contatto dopo 1 secondo dall'invio del messaggio dell'utente
                const newObjMessageContact = {
                    date: new Date,
                    message: 'Ok!!',
                    status: 'received'
                };
                setTimeout(() => {
                    this.contacts[this.currentContactIndex].messages.push(newObjMessageContact)
                }, 1000)
            }
            this.newMessage = '';
        },
        // Funzione per definire il formato data del messaggio relativo al tempo attuale (fromNow)
        // dateMessage(time) {
        //     return moment(time, "DD/MM/YYYY hh:mm:ss").fromNow()
        // },
        // Funzione per definire il formato data del messaggio: orario con ora e minuti
        dateMessage(time) {
            return moment(time, "DD/MM/YYYY hh:mm:ss").format('LT')
        },
        // Funzione per ricercare utenti in base alle lettere inserite nel campo input (search-bar)
        searchContact() {
            this.contacts.filter(contact => {
                if( contact.name.toLowerCase().includes(this.searchChat.toLowerCase()) ) {
                    contact.visible = true;
                } else {
                    contact.visible = false;
                }
            })
        }
    },
    created() {
        moment.locale('it');
    }
}).mount('#app');
