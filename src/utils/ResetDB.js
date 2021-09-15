require("dotenv").config()
const { Pool } = require("pg")

class ResetDB {
    constructor() {
        this._pool = new Pool()
    }

    async doNow() {
        try {
            const query = {
                text: "TRUNCATE notes, users, authentications, collaborations;",
            }
            await this._pool.query(query)
            console.log("db successfully reset")
        } catch (error) {
            console.log("failed to reset db")
            console.log(error)
        }
    }
}

const resetDB = new ResetDB()

resetDB.doNow()