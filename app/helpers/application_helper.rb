module ApplicationHelper

  def is_admin?
   return current_user.user_type === 'admin' ? true : false
  end

  def is_teacher?
    return current_user.user_type === 'teacher' ? true : false
  end

end
