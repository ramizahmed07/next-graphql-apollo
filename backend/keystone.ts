import "dotenv/config";
import {User} from "./schemas/User"
import {createAuth} from "@keystone-next/auth"
import {config, createSchema} from "@keystone-next/keystone/schema"
import {withItemData, statelessSessions} from "@keystone-next/keystone/session"


const databaseURL = process.env.DATABASE_URL || "mongodb://localhost/keystone-sick-fits-tutorial";

const {withAuth} = createAuth({
  listKey: "User",
  identityField: "email",
  secretField: "password",
  initFirstItem: {
    fields: ["name", "email", "password"],
    // Todo: Add in initial roles here
  }
})

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // how long they stay signed in
  secret: process.env.COOKIE_SECRET,
}

export default withAuth(config({
  server: {
    cors:{
      origin: [process.env.FRONTEND_URL],
      credentials: true
    },
  },
  db: {
    adapter: "mongoose",
    url: databaseURL,
    //TODO: Add data seeding here
  },
  
  lists: createSchema({
    // Schema items go in here
    User
  }),

  ui: {
    // Todo: change this for roles
    isAccessAllowed: ({session}) => !!session?.data,
  },
  
  // Todo: Add session values here
  session: withItemData(statelessSessions(sessionConfig), {
    User: `id`
  })
}))
