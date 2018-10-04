// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/quiz_dev'
  }, 
  production: {
    client: 'pg', 
    connection: 'postgres://nxmniebjmvlsii:eabbca63930a10c26397bd046fdc48fed134f381e3c94917744bc03b958585c2@ec2-54-225-68-133.compute-1.amazonaws.com:5432/ddn01darg4rvo4'
  }

};
