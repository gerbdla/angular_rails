class CreateStocks < ActiveRecord::Migration[5.1]
  def change
    create_table :stocks do |t|
      t.string :symbol
      t.string :ask
      t.string :bid
      t.timestamps
    end
  end
end
