const { Umzug, SequelizeStorage } = require('umzug');

class SeederDB {

    constructor(sequelize) {

        this.sequelize = sequelize;

        this.umzug = new Umzug({
            migrations: { glob: 'seeders/*.js' },
            context: sequelize.getQueryInterface(),
            storage: new SequelizeStorage({ sequelize }),
            logger: process.env.NODE_ENV === 'test' ?  undefined : console,
        });
    }   

    async up() {
    
        await this.umzug.up();
    
    }

    async down() {
    
        await this.umzug.down({ to: 0 });
    
    }
}


module.exports = SeederDB