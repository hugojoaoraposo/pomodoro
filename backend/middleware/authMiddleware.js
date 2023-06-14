 const admin - NAO SERA NECESSÁRIO ADM, mas se houver tempo para criar USER/LOGIN 


 const user 

// FAZER OS IMPORTS 

const protect = asyncHandler(async (req, res, next) => {
    
  
  let token
  
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      try {
        token = req.headers.authorization.split(' ')[1]
        //   it will split by the space and will take 1 element from array that is [Bearer token123]

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
  
        req.user = await User.findById(decoded.id).select('-password')
  
        next()
      } catch (error) {
        console.error(error)
        res.status(401)
        throw new Error(' 401 Unauthorized - NÃO AUTORIZADO - ERRROOOORRRR ')
      }
    }
  
    if (!token) {
      res.status(401)
      throw new Error(' 401 Unauthorized - NÃO AUTORIZADO - ERRROOOORRRR ')
    }
  })
  
   const usuario = (req, res, next) => {
    if (req.user && req.user.isUsuario) {
      next()
    } else {
      res.status(401)
      throw new Error(' 401 Unauthorized - NÃO AUTORIZADO - ERRROOOORRRR ')
    }
  }
  
  export { protect, admin }  