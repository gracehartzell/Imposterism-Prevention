exports.seed = function(knex) {
    return knex('users').del()
        .then(() => {
            return knex('users').insert([ 
                {
                    name: 'Captain',
                    email: 'captain@cat.com',
                    password: 'catcatcat'
                },
                {
                    name: 'Cooper',
                    email: 'hello@cat.com',
                    password: 'catcfjfjcat'                     
                },
                {
                    name: 'Cora',
                    email: 'see@gggt.com',
                    password: 'lalala'
                },
                {
                    name: 'Grace',                    
                    email: 'grace@gmail.com',
                    password: 'please'
                }
            ]);
        });
};