const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const konsultasiSchema = new Schema({
	nama: { type: String, required: true },
	alamat: { type: String, required: true },
	noTelp: { type: Number, required: true },
	noAgent: { type: Number, required: true },
	spesifikasiKulit: { type: String, required: true },
	kondisi: { type: String, required: true },
	fotoAgent: {},
	fotoKulit: {},
},  
	{
		timestamps: true,
	}
);

const Konsultasi = mongoose.model('Konsultasi', konsultasiSchema);

module.exports = Konsultasi;