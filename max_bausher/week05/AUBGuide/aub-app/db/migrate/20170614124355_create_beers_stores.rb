class CreateBeersStores < ActiveRecord::Migration[5.0]
  def change
    create_table :beers_stores do |t|
      t.integer :store_id
      t.integer :beer_id
    end
  end
end
