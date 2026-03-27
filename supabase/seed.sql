-- Seed Data for Astra Global

-- Seed Events
INSERT INTO w260327a_events (title, description, date, location, status, image_url) VALUES
('亚太贸易纽带', '亚太地区贸易合作盛会，促进区域经济一体化', '2024年10月14-16日', '新加坡', '已确认', 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=800'),
('战略外交研讨会', '全球外交战略研讨，汇聚各国政策制定者', '2024年11月02-05日', '伦敦', '精英准入', 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800'),
('全球政策论坛', '国际政策制定者峰会，讨论未来全球治理', '2024年12月12-14日', '巴黎', '报名开放中', 'https://images.unsplash.com/photo-1547582901-1e8a5a71f84d?w=800');

-- Seed Training
INSERT INTO w260327a_training (title, description, benefits, requirements, start_date, end_date, location, mode, price) VALUES
('全球领导力培训', '国际外交官和企业愿景家量身定制的权威高管之旅。掌握全球战略艺术与国际协议。', ARRAY['获得认证的国际领导力证书', '直接对接财富500强全球导师', '专属战略部署框架'], '8年以上专业经验，3年担任中高级管理或外交职务', '2024年10月12日', '2024年11月15日', '日内瓦', 'hybrid', '¥58,000'),
('战略外交研修班', '深度探讨国际关系与外交策略的强化项目', ARRAY['深度外交策略洞察', '跨文化沟通能力提升', '国际人脉网络'], '5年以上外交或国际事务经验', '2024年11月20日', '2024年12月10日', '新加坡', 'hybrid', '¥45,000');

-- Seed Conferences
INSERT INTO w260327a_conferences (title, description, date, location, agenda, venue_info) VALUES
('2024年国际峰会', '星际未来的建筑师 - 汇聚全球顶尖愿景家、外交官和科技先驱的年度盛会', '2024年11月12-14日', '日内瓦，猎户座展馆', '[{"time":"09:00","period":"AM EST","title":"主题演讲：主权银河","description":"随着人类向大气层外扩张，关于国际法范式转变的开幕致辞。","location":"全体会议大厅"},{"time":"11:30","period":"AM EST","title":"神经外交研讨会","description":"关于22世纪人工智能调解谈判和跨文化交流的互动会议。","location":"A演播室"},{"time":"02:00","period":"PM EST","title":"资源管理小组讨论","description":"关于小行星采矿权和为后代保护星际环境的讨论。","location":"虚空厅"}]', '{"name":"猎户座展馆","address":"瑞士日内瓦，罗纳大街 42 号，1204","amenities":["千兆连接","实时翻译（48种语言）","米其林标准餐饮"]}');
-- Seed News
INSERT INTO w260327a_news (title, excerpt, content, date, image_url, category, tags, author_name, read_time) VALUES
('New Orbital Transit Corridor Established over Pacific', 'Pacific transit corridor milestone - 新转运走廊的建立标志着减少商业与科学发射摩擦的重要里程碑。', '新转运走廊的实施标志着在减少商业和科学发射之间摩擦方面的重要里程碑。各国代表已达成共识，将共同管理这条新的太空通道。', '2024年10月20日', 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800', '空间探索', ARRAY['#OrbitalPolicy', '#SpaceEthics', '#AstraSummit'], 'Dr. Elena Thorne', '12分钟'),
('Astra Observatory Unveils First Deep Field Imagery', 'Astra天文台发布首批深空图像 - 捕捉到138亿年前的光线，提供前所未有的早期天体结构清晰图像。', '捕捉到138亿年前的光线，提供前所未有的早期天体结构清晰图像。这一突破性成果将为人类理解宇宙起源提供新的视角。', '2024年10月15日', 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800', '技术', ARRAY['#Astronomy', '#DeepSpace'], 'Prof. Marcus Chen', '8分钟'),
('Technological Leap in Quantum Communications', '量子通信技术突破 - Astra Global Labs 宣布地球与月球基地即时数据中继的突破。', 'Astra Global Labs 的研究人员宣布了在地球与月球基地之间即时数据中继方面的突破。这一成果将彻底改变深空通信方式。', '2024年10月08日', 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800', '技术', ARRAY['#Quantum', '#Communications'], 'Dr. Sarah Kostovich', '10分钟');

-- Seed Gallery
INSERT INTO w260327a_gallery (title, image_url, tag, category) VALUES
('数字外交论坛', 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800', '2023年全球峰会', 'events'),
('精英领导力项目', 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800', 'Alpha届毕业典礼', 'training'),
('泛亚经济圆桌会议', 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800', '2022年区域协作', 'events'),
('星际卓越奖颁奖礼', 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800', '2023年年度盛典', 'events'),
('战略协议研修班', 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800', '2021年卓越培训', 'training'),
('未来遗产实验室', 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800', 'Beta届研讨会', 'training');
