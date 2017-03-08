# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170307140057) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "answers", force: :cascade do |t|
    t.string   "answer"
    t.integer  "question_id"
    t.integer  "user_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["question_id"], name: "index_answers_on_question_id", using: :btree
    t.index ["user_id"], name: "index_answers_on_user_id", using: :btree
  end

  create_table "courses", force: :cascade do |t|
    t.string   "title"
    t.text     "description"
    t.integer  "teacher_id"
    t.integer  "grade_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["grade_id"], name: "index_courses_on_grade_id", using: :btree
    t.index ["teacher_id"], name: "index_courses_on_teacher_id", using: :btree
  end

  create_table "grades", force: :cascade do |t|
    t.string   "grade"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "questions", force: :cascade do |t|
    t.string   "question"
    t.integer  "course_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "user_id"
    t.index ["course_id"], name: "index_questions_on_course_id", using: :btree
    t.index ["user_id"], name: "index_questions_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "name"
    t.string   "email"
    t.string   "personal_id"
    t.string   "password_digest"
    t.date     "dob"
    t.string   "user_type"
    t.boolean  "registration_confirmed", default: false
    t.string   "registration_token"
    t.integer  "grade_id"
    t.datetime "created_at",                             null: false
    t.datetime "updated_at",                             null: false
    t.index ["grade_id"], name: "index_users_on_grade_id", using: :btree
  end

  create_table "videos", force: :cascade do |t|
    t.string   "video_data"
    t.string   "title"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.text     "description"
    t.integer  "view"
    t.integer  "course_id"
    t.index ["course_id"], name: "index_videos_on_course_id", using: :btree
  end

  add_foreign_key "answers", "questions"
  add_foreign_key "answers", "users"
  add_foreign_key "courses", "grades"
  add_foreign_key "courses", "users", column: "teacher_id"
  add_foreign_key "questions", "courses"
  add_foreign_key "questions", "users"
  add_foreign_key "users", "grades"
  add_foreign_key "videos", "courses"
end
