
module.exports.paginate = async (req, res, next) => {
  try {
    const { query: { page, results } } = req;

    req.pagination = {
      limit: results > 50 ? 50 : results,
      offset: page > 1 ? results * (page - 1) : 0
    };

    /*
      page 1
      res 10
      offset 0

      page 3
      res 10
      offset 20

    */

    next();
  } catch (error) {
    next(error);
  }
}