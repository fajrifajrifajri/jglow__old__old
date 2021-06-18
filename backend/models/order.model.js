const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
	nama: { type: String, required: true },
	alamat: { type: String, required: true },
	noTelp: { type: Number, required: true },
	noAgent: { type: Number, required: true },
	orderProduct: { type: String, required: true },
	jumlahOrder: { type: Number, required: true },
	optionPengiriman: { type: String, required: true },
}, 
	{
		timestamps: true,
	}
);

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;