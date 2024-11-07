module.exports.custom = {
    // Membatasi akses download dengan header Authorization
    downloadAccess: function (req, res, next) {
        const authHeader = req.headers['authorization'];
        const secretToken = process.env.SECRET_TOKEN; // Ambil token dari .env
    
        // Validasi token atau kredensial lain
        if (!authHeader || authHeader !== `Bearer ${secretToken}`) {
          return res.status(403).json({ message: 'Forbidden' });
        }
    
        return next();
    }
  };
  