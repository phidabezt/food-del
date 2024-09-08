import mongoose from 'mongoose'

export const connectDB = async () => {
  await mongoose
    .connect(
      'mongodb+srv://quangphi1231:0879264342@cluster0.gfcwr.mongodb.net/food-del'
    )
    .then(() => console.log('DB Connected'))
}
