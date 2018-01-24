
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        {id: 1, url: 'blah.com', picture: 'lolcat.jpg', user_id: 99901},
        {id: 2, url: 'bloo.com', picture: 'funshark.jpg', user_id: 99902},
        {id: 3, url: 'haaa.com', picture: 'sweetdog.jpg', user_id: 99903}
      ]);
    });
};
