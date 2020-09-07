import mongoose from 'mongoose';
let Schema = mongoose.Schema;
let usuarioSchema = new Schema({
      nombre: String,
      apellido: String,
      nickName: String,
      email: String,
      categoriaDestacada:[{}],
      fechaRegistro: Date,
      voto: [{type: Schema.ObjectId,
              ref: "Post"}],
      postCreado:[{
            type: Schema.ObjectId,
                  ref: "Post"}]
    
})

module.exports = mongoose.model('Usuario', usuarioSchema);