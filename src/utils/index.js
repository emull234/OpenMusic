const mapGetAll = ({ id, title, performer }) => ({
  id,
  title,
  performer,
});

const mapGetDetail = ({
  id,
  title,
  year,
  performance,
  genre,
  duration,
  inserted_at,
  updated_at,
}) => ({
  id,
  title,
  year,
  performance,
  genre,
  duration,
  insertedAt: inserted_at,
  updatedAt: updated_at,
});

module.exports = { mapGetAll, mapGetDetail };
