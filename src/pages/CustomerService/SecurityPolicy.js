import React from 'react';

import { Collapse } from 'antd';
import { PolicyGeneralStyled } from './styles';
const items = [
    {
        key: '1',
        label: '1. Mục đích và phạm vi thu thập',
        children: (
            <p>
                Việc thu thập dữ liệu chủ yếu trên website bao gồm: họ tên, email, điện thoại, địa chỉ khách hàng trong mục liên hệ. Đây là các thông tin mà chúng tôi cần thành viên cung cấp bắt buộc khi gửi thông tin nhờ tư vấn hay muốn mua sản phẩm và để chúng tôi liên hệ xác nhận lại với khách hàng trên website nhằm đảm bảo quyền lợi cho cho người tiêu dùng.
                <br />
                <br />
                Các thành viên sẽ tự chịu trách nhiệm về bảo mật và lưu giữ mọi hoạt động sử dụng dịch vụ dưới thông tin mà mình cung cấp và hộp thư điện tử của mình. Ngoài ra, thành viên có trách nhiệm thông báo kịp thời cho webiste chúng tôi về những hành vi sử dụng trái phép, lạm dụng, vi phạm bảo mật, lưu giữ tên đăng ký và mật khẩu của bên thứ ba để có biện pháp giải quyết phù hợp.
            </p>
        )
    },
    {
        key: '2',
        label: '2. Phạm vi sử dụng thông tin',
        children: (
            <p>
                <b>Chúng tôi sử dụng thông tin thành viên cung cấp để:</b>
                <br /> <br /> &bull; Liên hệ xác nhận đơn hàng và giao hàng cho thành viên khi nhận được yêu cầu từ thành viên
                <br /> &bull; Cung cấp thông tin về sản phẩm đến khách hàng nếu có yêu cầu từ khách hàng
                <br /> &bull; Gửi email tiếp thị, khuyến mại về hàng hóa do chúng tôi bán
                <br /> &bull; Gửi các thông báo về các hoạt động trên website
                <br /> &bull; Liên lạc và giải quyết với người dùng trong những trường hợp đặc biệt
                <br /> &bull; Không sử dụng thông tin cá nhân của người dùng ngoài mục đích xác nhận và liên hệ có liên quan đến giao dịch
                <br /> &bull; Khi có yêu cầu của cơ quan tư pháp bao gồm: Viện kiểm sát, tòa án, cơ quan công an điều tra liên quan đến hành vi vi phạm pháp luật nào đó của khách hàng.
            </p>
        )
    },
    {
        key: '3',
        label: '3. Chính sách đổi trả - bảo hành',
        children: <p>Dữ liệu cá nhân của thành viên sẽ được lưu trữ cho đến khi có yêu cầu ban quản trị hủy bỏ. Còn lại trong mọi trường hợp thông tin cá nhân thành viên sẽ được bảo mật trên máy chủ của chúng tôi</p>
    },
    {
        key: '4',
        label: '4. Những người hoặc tổ chức có thể được tiếp cận với thông tin cá nhân',
        children: (
            <p>
                <b>Đối tượng được tiếp cận với thông tin cá nhân của khách hàng thuộc một trong những trường hợp sau:</b>
                <br /> <br /> &bull; Nhân viên của công ty
                <br /> &bull; Các đối tác có ký hợp động thực hiện 1 phần dịch vụ của Công Ty. Các đối tác này sẽ nhận được những thông tin theo thỏa thuận hợp đồng (có thể 1 phần hoặc toàn bộ thông tin tuy theo điều khoản hợp đồng) để tiến hành hỗ trợ người dùng sử dụng dịch vụ do Công ty cung cấp.
            </p>
        )
    },
    {
        key: '5',
        label: '5. Địa chỉ của đơn vị thu thu thập và quản lý thông tin cá nhân ',
        children: (
            <p>
                <b>CÔNG TY CỔ PHẦN CẤP NƯỚC HẢI PHÒNG</b>
                <br />
                <br />
                <b>Địa chỉ:</b> Số 54 Đinh Tiên Hoàng, P. Hoàng Văn Thụ, Q. Hồng Bàng, TP. Hải Phòng <br />
                <b>Điện thoại:</b> 0225.3745377
                <br />
                <b>Fax:</b> 0225.3823748
                <br />
                <b>Email:</b> congtycophancapnuochaiphong@gmail.com
            </p>
        )
    },
    {
        key: '6',
        label: '6. Phương tiện và công cụ để người dùng tiếp cận và chỉnh sửa dữ liệu cá nhân của mình',
        children: (
            <p>
                Thành viên có quyền tự kiểm tra, cập nhật, điều chỉnh hoặc hủy bỏ thông tin cá nhân của mình bằng cách liên hệ với ban quản trị website thực hiện việc này.
                <br />
                <br />
                Thành viên có quyền gửi khiếu nại về nội dung bảo mật thông tin đề nghị liên hệ Ban quản trị của website. Khi tiếp nhận những phản hồi này, chúng tôi sẽ xác nhận lại thông tin, trường hợp đúng như phản ánh của thành viên tùy theo mức độ, chúng tôi sẽ có những biện pháp xử lý kịp thời.
            </p>
        )
    },
    {
        key: '7',
        label: '7. Cơ chế tiếp nhận và giải quyết khiếu nại của người tiêu dùng',
        children: (
            <p>
                &bull; Mọi tranh chấp phát sinh giữa Công ty và Người dùng sẽ được giải quyết trên cơ sở thương lượng. Trường hợp không đạt được thỏa thuận như mong muốn, một trong hai bên có quyền đưa vụ việc ra Tòa án nhân dân có thẩm quyền để giải quyết.
                <br /> &bull; Khi không giải quyết được qua thương lượng, hòa giải như trên, bên bị vi phạm tập hợp các chứng cứ như email, tin nhắn…và liên lạc với Công ty. Công ty sẽ liên lạc lại với người khiếu nại để giải quyết.
                <br /> &bull; Nếu vụ việc vượt quá thẩm quyền của mình, Công ty sẽ đề nghị chuyển vụ việc cho các cơ quan chức năng có thẩm quyền. Trong trường hợp này, Công ty vẫn phối hợp hỗ trợ để bảo vệ tốt nhất bên bị vi phạm.
                <br /> <br />
                Thông tin cá nhân của thành viên được cam kết bảo mật tuyệt đối theo chính sách bảo vệ thông tin cá nhân. Việc thu thập và sử dụng thông tin của mỗi thành viên chỉ được thực hiện khi có sự đồng ý của khách hàng đó trừ những trường hợp pháp luật có quy định khác.
                <br /> <br />
                Không sử dụng, không chuyển giao, cung cấp hay tiết lộ cho bên thứ 3 nào về thông tin cá nhân của thành viên khi không có sự cho phép đồng ý từ thành viên.
                <br /> <br />
                Trong trường hợp máy chủ lưu trữ thông tin bị hacker tấn công dẫn đến mất mát dữ liệu cá nhân thành viên, chúng tôi sẽ có trách nhiệm thông báo vụ việc cho cơ quan chức năng điều tra xử lý kịp thời và thông báo cho thành viên được biết.
                <br /> <br />
                Bảo mật tuyệt đối mọi thông tin giao dịch trực tuyến của thành viên bao gồm thông tin hóa đơn kế toán chứng từ số hóa.
                <br /> <br />
                Ban quản lý yêu cầu các cá nhân khi đăng ký/mua hàng phải cung cấp đầy đủ thông tin cá nhân có liên quan như: Họ và tên, địa chỉ liên lạc, email, điện thoại,…., và chịu trách nhiệm về tính pháp lý của những thông tin trên. Ban quản lý không chịu trách nhiệm cũng như không giải quyết mọi khiếu nại có liên quan đến quyền lợi của thành viên đó nếu xét thấy tất cả thông tin cá nhân của thành viên đó cung cấp khi đăng ký ban đầu là không chính xác.
            </p>
        )
    }
];

const SecurityPolicy = () => {
    return (
        <div>
            <PolicyGeneralStyled>
                <div className="title">Chính sách bảo mật</div>
                <Collapse items={items} ghost expandIconPosition="end" defaultActiveKey={['1']} />
            </PolicyGeneralStyled>
        </div>
    );
};

export default SecurityPolicy;
