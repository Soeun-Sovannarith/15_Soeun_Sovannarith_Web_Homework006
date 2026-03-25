export async function getProducts() {
  const res = await fetch('https://homework-api.noevchanmakara.site/api/v1/products', { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch products');
  const data = await res.json();
  return data.payload; 
}

export async function getCustomers() {
  const res = await fetch('https://homework-api.noevchanmakara.site/api/v1/customers', { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch customers');
  const data = await res.json();
  return data.payload; 
}

export async function getCustomerById(id) {
  const res = await fetch(`https://homework-api.noevchanmakara.site/api/v1/customers/${id}`, { cache: 'no-store' });
  if (!res.ok) {
    if (res.status === 404) return null;
    throw new Error('Failed to fetch customer');
  }
  const data = await res.json();
  return data.payload;
}
