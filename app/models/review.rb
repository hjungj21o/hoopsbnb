class Review < ApplicationRecord
    validates :rating, :body, presence: true

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :arena,
        primary_key: :id,
        foreign_key: :arena_id,
        class_name: :Arena
end
