const mongoose = require('mongoose'),
      dbUser   = process.env.DB_USER,
      dbPass   = process.env.DB_PASS,
      dbName   = process.env.DB_NAME;

mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@cluster0-o5ezh.mongodb.net/${dbName}?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true
}).then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));