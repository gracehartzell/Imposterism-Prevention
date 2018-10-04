exports.seed = function(knex) {
    return knex('users').del()
        .then(() => {
            return knex('users').insert([ 
                {
                    email: 'captain@cat.com',
                    password: 'catcatcat'
                },
                {
                    email: 'hello@cat.com',
                    password: 'catcfjfjcat'                     
                },
                {
                    email: 'see@gggt.com',
                    password: 'lalala'
                },
                {
                    email: 'grace@gmail.com',
                    password: 'please'
                }
            ]);
        });
};