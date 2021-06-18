const router = require('express').Router();
const path = require("path");
let Konsultasi = require('../models/konsultasi.model');
const multer = require("multer");

// File Foto
const storage = multer.diskStorage({
   destination: "./public/",
   filename: function(req, file, cb){
      cb(null,"IMAGE-" + Date.now() + path.extname(file.originalname));
   }
});

const uploadFoto = multer({
   storage: storage,
   limits:{fileSize: 1000000}
})

//

router.route('/').get((req, res) => {
	Konsultasi.find()
		.then(konsultasi => res.json(konsultasi))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.post('/add', uploadFoto.fields([{ name: 'fotoAgentFile', maxCount: 1 }, { name: 'fotoKulitFile', maxCount:1 }]), (req, res) => {
	   
	console.log("Request ---", req.body);
	console.log("Request file ---", req.files);//Here you get file.
	
	const nama = req.body.nama;
	const tanggalLahir = Date.parse(req.body.tanggalLahir);
	const alamat = req.body.alamat;
	const noTelp = Number(req.body.noTelp);
	const noAgent = Number(req.body.noAgent);
	const spesifikasiKulit = req.body.spesifikasiKulit;
	const fotoAgent = req.body.fotoAgent;
	const fotoKulit = req.body.fotoKulit;
	const kondisi = req.body.kondisi;

	const newKonsultasi = new Konsultasi({
		nama,
		tanggalLahir,
		alamat,
		noTelp,
		noAgent,
		spesifikasiKulit,
		fotoAgent,
		fotoKulit,
		kondisi,
	});
	
	newKonsultasi.save()
		.then(() => res.json('Konsultasi ditambahkan!'))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
	Konsultasi.findById(req.params.id)
	.then(konsultasi => res.json(konsultasi))
	.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
	Konsultasi.findByIdAndDelete(req.params.id)
	.then(() => res.json('Konsultasi dihapus.'))
	.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
	Konsultasi.findById(req.params.id)
	.then(konsultasi => {
		konsultasi.nama = req.body.nama;
		konsultasi.tanggalLahir = Date.parse(req.body.tanggalLahir);
		konsultasi.alamat = req.body.alamat;
		konsultasi.noTelp = Number(req.body.noTelp);
		konsultasi.noAgent = Number(req.body.noAgent);
		konsultasi.spesifikasiKulit = req.body.spesifikasiKulit;
		konsultasi.kondisi = req.body.kondisi;
		konsultasi.fotoAgent = req.body.fotoAgent;
		konsultasi.fotoKulit = req.body.fotoKulit;
		
	konsultasi.save()
		.then(() => res.json('Konsultasi telah diupdate!'))
		.catch(err => res.status(400).json('Error: ' + err));
	})
});

module.exports = router;