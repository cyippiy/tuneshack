export const signup = user =>{
  return $.ajax({
    method: "POST",
    url: '/api/users',
    data: {user}
  })
};

export const login = user => {
  return $.ajax({
    method: "POST",
    url: 'api/session',
    data: {user}
  })
};

export const logout = () => {
  return $.ajax({
    method: "DELETE",
    url: 'api/session'
  })
};

export const fetchUser = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/users/${id}`
  })
};

export const editUser = (user) => {
  return $.ajax({
    method: "PATCH",
    url: `api/users/${user.id}`,
    data: {user}
  })
};

export const fetchSearchUsers = (search) => {
  return $.ajax({
    method: "GET",
    url: "api/users/search",
    data: {search}
  })
};