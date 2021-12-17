function Categories({ categories, setActiveCategory, activeCategory }) {
  return (
    <div className='lmj-categories'>
      <select
        value={activeCategory}
        onChange={(e) => setActiveCategory(e.target.value)}
        className='lmj-categories-select'
      >
        <option value=''>---</option>
        {categories?.map((cat, i) => (
          <option key={i} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button onClick={() => setActiveCategory('')}>Réinitialiser</button>
    </div>
  );
}

export default Categories;
