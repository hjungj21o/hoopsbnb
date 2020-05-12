# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  session_token   :string           not null
#  password_digest :string           not null
#  email           :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  birth_date      :date
#
class User < ApplicationRecord
    validates :email, presence: true, uniqueness: true
    validates :first_name, :last_name, presence: true
    validates :session_token, :password_digest, presence: true
    validates :password, length: {minimum: 6, allow_nil: true}
    validate :validate_age, :validate_email
    after_initialize :ensure_session_token

    attr_reader :password

    has_many :arenas,
        primary_key: :id,
        foreign_key: :gm_id,
        class_name: :Arena

    has_many :bookings,
        primary_key: :id,
        foreign_key: :hooper_id,
        class_name: :Booking
    
    has_many :reviews,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :Review


    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user
        user.is_password?(password) ? user : nil
    end

    def is_password?(password)
        bcrypt_password = BCrypt::Password.new(self.password_digest)
        bcrypt_password.is_password?(password)
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

    def reset_session_token!
        self.update!(session_token: User.generate_session_token)
        self.session_token
    end

    def validate_age
        if self.birth_date.class != Date
            self.errors[:base].push("Enter your birth date to continue")
        elsif self.birth_date > 18.years.ago.to_date
            self.errors[:base].push("You must be 18 years or older to sign up")
        end
    end

    def validate_email
        if !self.email.empty?
            email_split = self.email.split("@")
            if email_split.length !=2 || email_split[1].split(".").length != 2
                self.errors[:base].push("Enter a valid email")
            end
        end
    end
end
