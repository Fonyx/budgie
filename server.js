const path = require('path');
const express = require('express');
const session = require('express-session');
const controllers = require('./controllers');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const cRequests = require('./middleware/colorRequests');
const helpers = require('./utils/hjsHelpers');

const hbs = exphbs.create({ helpers });

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'Super secret secret',
  saveUninitialized: true,
  resave: true,
  rolling: true,
  // maxAge: 10 * 1000,
  // maxAge: 5 * 60 * 1000, // 5 minutes
  cookie: {
    // 5 minute session timeout
    maxAge: 1000 * 60 * 5
  },
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));
app.use(cRequests);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(controllers);
// enable the handlebars engineer
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// open the public folder up for express public
app.use(express.static(path.join(__dirname, 'public')));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening @ http://localhost:3001'));
});
